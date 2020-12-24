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
        There are 3 tabs for 3 different types entities, each tab will display a
        list of the entities of that particular type and you can filter them
        results based on the attributes the that entity has. To come look back
        at this information, click on the IPL Explorer text-link in the top left
        corner.
      </p>
    </div>
  )
}
