/**
 * Paragraph component for reuse in Info component
 *
 * @param {React.PropsWithChildren & {title: string; data: Object;}} props
 */
export default function Paragraph({ title, children }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-50">
        {title}
      </h2>
      <p className="text-lg text-gray-500 mt-3 dark:text-gray-300">
        {children}
      </p>
    </>
  )
}
