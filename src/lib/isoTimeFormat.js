const isoTimeFormat = (dateTime)=>{
  const date = new Date(dateTime);
  const localTime = date.toLocaleTimeString('pt-BR',{
    hour: '2-digit',
    minute: '2-digit',
    hour12: 'true',
  })
  return localTime
}

export default isoTimeFormat