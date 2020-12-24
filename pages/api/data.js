/**
 * A basic API for the site to query data
 */
import { parseString } from '@fast-csv/parse'
import csvData from '../../data'

/**
 * Function for data endpoint
 *
 * ideal url - /api/data?resource=players&page=1&size=12
 *
 * for all data - /api/data=?resource=players&size=0
 */
export default async (req, res) => {
  // if method is not GET, 400 error (bad request)
  if (req.method.toLowerCase() !== 'get')
    return res.status(400).json({
      status: 'fail',
      error: 'Bad Request, only get request allowed.'
    })

  // get resource name
  const resourceName = req.query.resource

  // page number should be at least 1
  const page = parseInt(req.query.page, 10) || 1

  // size = 0 for all data, other num values otherwise
  const size = parseInt(req.query.size, 10) ?? 12

  // object for checking if resource exists
  const resourcesObj = {
    teams: true,
    players: true,
    matches: true,
    venues: true
  }

  // if the resource does not exist, 404 error
  if (!resourcesObj[resourceName])
    return res.status(404).json({
      status: 'fail',
      error: 'Resource does not exist'
    })

  // calc number of rows to skip
  const skipRows = (page - 1) * size

  try {
    const data = []

    await new Promise((resolve, reject) => {
      parseString(csvData[resourceName], {
        headers: true,
        maxRows: size,
        skipRows
      })
        .on('error', (err) => reject(err))
        .on('data', (row) => data.push(row))
        .on('end', () => resolve())
    })

    res.status(200).json({
      status: 'success',
      data
    })
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      error: err.message
    })
  }
}
