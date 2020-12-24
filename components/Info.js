/**
 * Info has the introduction and how-to-use information
 */
export default function Info() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800">Welcome 🤗</h2>
      <p className="text-lg text-gray-500 mt-3">
        This is an explorer for IPL 2017
      </p>
      <br />
      <h2 className="text-2xl font-bold text-gray-800">Made by Siddharth 💻</h2>
      <p className="text-lg text-gray-500 mt-3">
        I have made this explorer as a part of my challenge to qualify for an
        internship at {}
        <a
          href="https://atlan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Atlan
        </a>
      </p>
      <br />
      <h2 className="text-2xl font-bold text-gray-800">How to browse ❓</h2>
      <p className="text-lg text-gray-500 mt-3">
        This app has data of IPL 2017 divided into 3 categories -
        <br />
        1. Players - list of all the players in IPL 2017
        <br />
        2. Teams - list of all teams (and their owners) in IPL 2017
        <br />
        3. Venues - list of all venues (and the cities) in IPL 2017
        <br />
        Go to any tab and click on any one item in the result list, all the
        attributes related to the item will appear and click again to close it.
        Use the search bar to filter the results by the attributes values.
      </p>
    </div>
  )
}
