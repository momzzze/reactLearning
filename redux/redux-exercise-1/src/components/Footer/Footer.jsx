


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 p-4">
        <div className=" flex items-center gap-8 justify-center text-center">
          <p>&copy; {new Date().getFullYear()} Nikola. All Rights Reserved.</p>
          <p className="">Designed with <span role="img" aria-label="Love">❤️</span> by Nikola</p>
        </div>
      </footer>
    )
}

export default Footer