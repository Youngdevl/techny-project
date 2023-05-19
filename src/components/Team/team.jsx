import './team.css'
const people = [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://imgs.search.brave.com/QHwXM78kxPOicuEydnXvrpxtELoC9PA3cCSSEeWOP94/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zb3J0/aXRvdXRzaS5uZXQv/dXBsb2Fkcy9tZWRp/YS9jQWhCbTNYTERq/TUVPcXlzRUVLcWRi/dE5WbU1QNVJHZEd5/emtTN2RsLmpwZw',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder',
        imageUrl:
        'https://imgs.search.brave.com/byMoH1-HTNFdfe5AUXwU4oijznSSZRwhvb-R4nCw_1s/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9yZXYy/Mi0yLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNi9P/ZmZlcmluZy1xdWFs/aXR5LXBhdGllbnQt/Y2FyZS0xMDYyMDIw/NjU4XzEzNjV4MTM2/NS5qcGc',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder',
        imageUrl:
         'https://imgs.search.brave.com/OOOorjnQnhffDKk8Ou9LCgDagUMfRx2zKNcDv3jLURU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/b3BpMXZNcS1OZldw/STYtNi1fU2hBSGFI/YSZwaWQ9QXBp',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder',
        imageUrl:
          'https://imgs.search.brave.com/b3z5MU8RHZxX1XB26etBlKdBFOjvlOKki4dNpILtQLg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmlt/Z3VyLmNvbS9yQmhC/aWpVLmpwZw',
      },
  
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32" id="fune">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
            <div className='center'>  <button
            type="button" id='fv'
            className="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register Now
          </button>
           <button
            type="button" id='fst'
            className="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Plans  <span aria-hidden="true">&nbsp;&rarr;</span>
          </button>
          </div>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-white">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  