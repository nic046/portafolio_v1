function Name({language}) {
  return (
    <div className="flex justify-end text-gray-800 dark:text-gray-300 text-4xl font-bold text-end before:content-['{'] after:content-['}'] before:animate-blink after:animate-blink">
    <h1 className="uppercase inline-block ">{language==="ES" ? "Hola_soy_":"Hello _ I _ am _"}</h1>
    <div className="overflow-hidden h-10 relative">
      <ul className="text-4xl font-bold m-0 p-0 animate-slide">
        <li className="h-10">{"."}Nico</li>
        <li className="h-10"></li>
        <li className="h-10">{"."}Nico</li>
        <li className="h-10"></li>
      </ul>
    </div>
  </div>
  )
}

export default Name