import axios from 'axios'

const api = axios.create(({
  baseURL: 'http://localhost:3000',
}))


export const getInvestments = async () => {
  const data = (await api.get('/investments')).data

  return data;
}

export const getReports = async (investmentId) => {
  const data = (await (api.get('/reports'))).data

  let filterData = data.filter(report => report.investmentId === investmentId)
  filterData.sort((a,b) => {
    if(a.month > b.month) {
      return 1
    }

    if(a.month < b.month) {
      return -1
    }

    return 0
  })


  return filterData
}
