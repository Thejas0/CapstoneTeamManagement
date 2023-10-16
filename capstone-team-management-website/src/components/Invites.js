import React from 'react'
import InviteCard from './InviteCard'

export const Invites = () => {

const students = [
    { studentId: 'UG21241512', studentName: 'Nigga' },
    { studentId: 'UG2124151', studentName: 'Lil smith' },
    { studentId: 'UG2124112', studentName: 'Joe smith' },
    { studentId: 'UG212412', studentName: 'Lil brat' },
    { studentId: 'UG2141512', studentName: 'John cena' },
    { studentId: 'UG2141512', studentName: 'Sujan Sumi .|.' },
    { studentId: 'UG2141512', studentName: 'raksha :D' },
    // Add more student objects as needed
];
  return (
    <div>

        {students.map((student) => (
        <InviteCard
          studentId={student.studentId} // ProvstudentIde a unique key for each card
          studentName={student.studentName}
          
        />
      ))}
    </div>
  )
}
