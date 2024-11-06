import StatisticsChart from "../Components/StatisticsChart"

const Statistics = () => {
  return (
    <>
      <div className="bg-[#9538E2] text-center py-10">
        <h1 className="text-3xl font-bold text-white">Statisticks</h1>
        <p className="text-white py-3 text-sm">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
      </div>

      <div className="bg-gray-200 py-10">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-2xl font-bold py-5">Statistics</h1>


          <StatisticsChart/>
        </div>
      </div>
    </>
  )
}

export default Statistics