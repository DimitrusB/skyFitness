import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signOut, updatePassword, reauthenticateWithCredential , signInWithEmailAndPassword, verifyBeforeUpdateEmail} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDaCzyioDX7BZIWGlNNMvbLim4663GqfVI",
  authDomain: "skyfitness-f3ebe.firebaseapp.com",
  databaseURL: "https://skyfitness-f3ebe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyfitness-f3ebe",
  storageBucket: "skyfitness-f3ebe.appspot.com",
  messagingSenderId: "279736690821",
  appId: "1:279736690821:web:72b1522745c34ca3bb61ec"
};

const appFitnes = initializeApp(firebaseConfig);
export const auth = getAuth(appFitnes);
const db = getDatabase(appFitnes);



export async function getData() {
    const response = await fetch("https://skyfitness-f3ebe-default-rtdb.europe-west1.firebasedatabase.app/courses.json");
    const data = await response.json();
    return data;
  }

  export const regUser = async (email, password) => {
    console.log("registr");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
    
      const userId = userCredential.user.uid;
      const userRef = ref(db, 'users/' + userId);
    
      const userData = {
        email: email,
        courses:{
          bodyflex:{
            statusBay: false,
            workout:{
              0:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              },
              1:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              },
              2:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              }
            }
          },
          dancefitness:{
            statusBay: false,
            workout:{
              0:{
                readyStatus: false,
              },
              1:{
                readyStatus: false,
              },
              2:{
                readyStatus: false,
              },
              3:{
                readyStatus: false,
              },
              4:{
                readyStatus: false,
              }
            }
          },
          stepaerobics:{
            statusBay: false,
            workout:{
              0:{
                readyStatus: false,
              },
              1:{
                readyStatus: false,
              },
              2:{
                readyStatus: false,
              },
              3:{
                readyStatus: false,
              }
            }
          },
          stretching:{
            statusBay: false,
            workout:{
              0:{
                readyStatus: false,
                exercisesCounter: [0,0,0,0]
              },
              1:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              },
              2:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              }
            }
          },
          yoga:{
            statusBay: false,
            workout:{
              0:{
                readyStatus: false,
                exercisesCounter: [0]
              },
              1:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              },
              2:{
                readyStatus: false,
                exercisesCounter: [0,0,0,0]
              },
              3:{
                readyStatus: false,
                exercisesCounter: [0,0,0,0]
              },
              4:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              }
            }
          }
        },
        // другие данные
      }; 
      
      await set(userRef, userData);
      return userData; 
    } catch (error) {
      throw error; 
    }
  }

  export const editPassword = async (newPassword) => {
    try {
      const user = auth.currentUser;
      await updatePassword(user, newPassword)
      console.log("edit password");
    } catch (error) {
      console.log(error);
    }
  }

  export const editEmail = async (newEmail) => {
    try {
      const user = auth.currentUser;
      await verifyBeforeUpdateEmail(user, newEmail);
      return { success: true, message: "Письмо с подтверждением успешно отправлено." }; 
    } catch (error) {
      return { success: false, message: error.message === "Firebase: Error (auth/requires-recent-login)." ? "Необходима повторная авторизация": error.message }; 
    }
  };
  
  

  export const enter = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      const emailRef = ref(db, 'users/' + userId)
      await update(emailRef, {
        email: userCredential.user.email,
      });
      const userRef = ref(db, 'users/' + userId);
      let snapshot  = await get(userRef);
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log('No data available');
      }
    } catch (error) {
      throw error; 
    }
  }


  export const getUserLessons = async () => {
    try {

      
      const userId = auth.currentUser.uid;
      
      const userRef = ref(db, 'users/' + userId);
      
      let snapshot  = await get(userRef);
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log('No data available');
      }
    } catch (error) {
      throw error; 
    }
  }


  export const exit = async () => {
    try {
      signOut(auth)
    } catch (error) {
      throw error; 
    }
  }

  export const bayCourse = async (courseName) => {
    const user = auth.currentUser;
    const courseRef = ref(db, 'users/' + user.uid + '/courses/' + courseName);
    
    try {
        await update(courseRef, {
            statusBay: true,
        });
        console.log('Course purchased successfully');
    } catch(error) {
        console.error('Error updating data:', error);
    }
} 

export const changeStatusExercises = async (courseName, numberExercises) => {
  console.log("change");
  const user = auth.currentUser;
  const courseRef = ref(db, 'users/' + user.uid + '/courses/' + courseName + '/workout/' + numberExercises);
  
  try {
      await update(courseRef, {
        readyStatus: true,
      });
      console.log('Status purchased successfully');
  } catch(error) {
      console.error('Error updating data:', error);
  }
} 

export const changeCounter = async (courseName, numberExercises, value) => {
  console.log("change");
  const user = auth.currentUser;
  const courseRef = ref(db, 'users/' + user.uid + '/courses/' + courseName + '/workout/' + numberExercises);
  
  try {
      await update(courseRef, {
        exercisesCounter: value,
      });
      console.log('Status purchased successfully');
  } catch(error) {
      console.error('Error updating data:', error);
  }
} 

export const updateLogin = async () => {
  
}