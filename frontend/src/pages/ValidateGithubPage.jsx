import React from 'react'

const ValidateGithubPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-300 via-teal-500 to-green-600 flex flex-col gap-10 justify-center items-center'>
      <div className="bg-green-700 bg-opacity-90 shadow-lg rounded-lg p-10 max-w-lg text-center m-0 text-white transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold font-serif mb-6 tracking-wide">
          Step 1
        </h1>
        <p className="text-lg font-serif mb-4 leading-relaxed">
          Create a repository with your official GitHub account.
        </p>
        <p className="text-lg font-serif mb-8 leading-relaxed">
          Name the repository `<strong>hackers-club-validation</strong>`
        </p>
      </div>



      <div className="bg-green-700 bg-opacity-90 shadow-lg rounded-lg p-10 max-w-lg text-center m-0 text-white transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold font-serif mb-6 tracking-wide">
          Step 2
        </h1>
        <p className="text-lg font-serif mb-4 leading-relaxed">
          Add the following code to ReadMe file
        </p>
        <p className="text-lg font-serif mb-8 leading-relaxed">
            //code
        </p>
      </div>

      <button class="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform duration-300 hover:bg-blue-600 hover:shadow-lg hover:scale-105">
           Submit Validation
        </button>



    </div>

    

    
  )
}

export default ValidateGithubPage
