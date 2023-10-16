import Card from 'react-bootstrap/Card';
import './InviteCard.css'
function InviteCard({ studentId, studentName }) {
  return (
    <div className="student-card">
     <div className='student-info wrapper'>
      <div className="student-name">
        <p>{studentName}</p>
      </div>
      <div className="student-id">
        <p>{studentId}</p>
      </div>
      </div>
      <div className="button-container">
        <button className="accept-button" >
          Accept
        </button>
        <button className="decline-button" >
          Decline
        </button>
      </div>
    </div>
  );
}

export default InviteCard;