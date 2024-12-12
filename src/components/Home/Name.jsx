function Name({language}) {
  return (
    <div className="flex justify-end text-gray-900 dark:text-gray-100 text-4xl font-bold text-end before:content-['{'] after:content-['}'] before:animate-blink after:animate-blink">
    <h1 className="uppercase inline-block ">{language==="ES" ? "Hola_soy_":"Hello_I_am_"}</h1>
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