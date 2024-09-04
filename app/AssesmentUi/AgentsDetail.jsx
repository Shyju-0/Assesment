import { Plus, School, UserRound } from 'lucide-react';

export default function AgentDetail() {
  const agentInfo = [
    {
      name: "Aamir Faisal",
      listing: "25",
      RAN: "1255",
      image: "Vector (1).png",
    },
    {
      name: "Shah Alam",
      listing: "62",
      RAN: "3055",
      image: "Vector.png",
    },
    {
      name: "Humaira Batisya",
      listing: "25",
      RAN: "1255",
      image: "Vector (2).png",
    },
    {
      name: "Hannah Yasmin",
      listing: "25",
      RAN: "1255",
      image: "Vector (3).png",
    },
    {
      name: "Ishaq Mizan",
      listing: "62",
      RAN: "3055",
      image: "Vector (4).png",
    },
  ];

  return (
    <>
      <div className="ml-20 flex justify-between mr-16">
        <div>
          <p className="text-3xl">
            <span className="text-black font-bold"> FEATURED</span>
            <span className="text-red-500 font-bold">AGENTS</span>
          </p>
          <p className="text-gray-600 mt-5">
            Meet the opportunity to work with some of the top <br /> Real Estate Agents in town
          </p>
        </div>
        <div className="flex gap-3">
          <div className="pl-3 flex items-center rounded-full bg-red-500 w-12 h-12">
            <Plus className="text-white" />
          </div>
          <p className="">
            <span className="text-black"> View all</span>
            <br />
            <span className="text-red-500 ">AGENTS</span>
          </p>
        </div>
      </div>
      {/* Agent Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {agentInfo.map((agent, index) => (
          <div key={index} className="flex max-w-sm mx-auto overflow-hidden ">
            <div className="flex-shrink-0 p-4">
              <img src={agent.image} alt={agent.name} className="" />
            </div>
            <div className="flex-grow p-4 mt-6">
              <span
                className={`text-xl font-bold text-white pr-5 pb-1 rounded-tr-[10px] ${
                  index % 2 === 1 ? 'bg-black' : 'bg-red-500'
                }`}
              >
                {agent.name}
              </span>
              <div
                className={`flex flex-col pt-6 border-t-2 pr-2 border-r-2 ${
                  index % 2 === 1 ? 'border-black' : 'border-red-500'
                }`}
              >
                <div className="flex items-center">
                  <School className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700 text-xs">Listings: {agent.listing}</span>
                  <UserRound className="w-5 h-5 mr-2 text-gray-500" />
                  <span className="text-gray-700 text-xs">REN {agent.RAN}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
