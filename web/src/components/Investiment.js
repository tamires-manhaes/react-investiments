import { useEffect, useState } from "react";
import { getReports } from "../services/investments";
import Header from "./Header";
import Main from "./Main";

const ReportCard = ({ id, month, year, value, diff}) => {
  let formatedValue = value.toFixed(2)
  return (
    <li id={id} className="p-4 m-1 flex flex-row ">
      <div>  
        <span className="mr-5">{month.toString().padStart(2, '0')}/{year}</span>
        <strong>R$ {formatedValue}</strong>
      </div>
      <div>
        <span className={`${diff <= 0 ? 'negative' : 'positive'}`}>{diff.toFixed(2)}%</span>
      </div>
    </li>
  )
}

export default function Investiment() {
  const [report, setReport] = useState([])
  const [totalFunds, setTotalFounds] = useState(0)
  const [totalPercentage, setTotalPercentage] = useState(0)
  
  const investmentId = localStorage.getItem('investmentId')
  const name = localStorage.getItem('investmentName')
  
  
  useEffect(() => {
    (async () => {
      let data = await getReports(investmentId)
      let newData = data.map((current, index, all) => {
        const percentage = index === 0 ? 0 : (current.value / all[index-1].value - 1) * 100
        return {...current, percentage}
      })

      setReport(newData)
      setTotalFounds(data[data.length - 1].value - data[0].value)
      setTotalPercentage((newData[newData.length - 1].value / newData[0].value - 1) * 100)
    })()
  }, [investmentId])
  
  return (
    <>
      <Header isHome={false} title={name} total={totalFunds.toFixed(2)} percentage={totalPercentage}/>
      <Main>
        {report && report.map((item) => {
          return (
            <ReportCard 
              key={item.id}
              id={item.id}
              month={item.month}
              year={item.year}
              value={item.value}
              diff={item.percentage}
            />
          )
        })}
      </Main>
    </>
  )
}
