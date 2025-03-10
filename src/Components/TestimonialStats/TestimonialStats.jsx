import "./TestimonialStats.css"
function TestimonialStats({stats, satisfied}) {
  return (
    <div className='testimonial-stats'>
      <p className='stat-text'>{stats}</p>
      <p className='stat-description'>{satisfied}</p>
      
    </div>
  )
}


export default TestimonialStats
