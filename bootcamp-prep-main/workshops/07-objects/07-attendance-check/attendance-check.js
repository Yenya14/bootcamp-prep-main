let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
// function attendanceCheck(day) {
//     switch (day) {
//       case 'Monday':
//       case 'Tuesday':
//       case 'Thursday':
//         return ['Marnie', 'Shoshanna'];
//       case 'Wednesday':
//         return ['Marnie', 'Lena'];
//       case 'Friday':
//         return ['Marnie', 'Lena', 'Jessa'];
//       default:
//         return [];
//     }
//   }
  
function attendanceCheck(day) {
    let attendance = {
      Monday: ['Marnie', 'Shoshanna'],
      Tuesday: ['Marnie', 'Shoshanna'],
      Wednesday: ['Marnie', 'Lena'],
      Thursday: ['Marnie', 'Shoshanna'],
      Friday: ['Marnie', 'Lena', 'Jessa'],
    };
  
    return attendance[day] || [];
  }
  