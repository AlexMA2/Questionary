const Line = ({ pointA, pointB }) => {
  const { xA, yA } = pointA
  const { xB, yB } = pointB

  const calculateWidth = () => {
    const xDiff = xB - xA
    const yDiff = yB - yA
    const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff)
    return distance
  }

  return (
    <span
      className={`width=${calculateWidth()} border-0 border-t-1 border-sky-900 absolute top-${yA} left-${xA}`}
    ></span>
  )
}

export default Line
