import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signOut, updatePassword, updateEmail, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";


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


const dataUrl = "https://skyfitness-f3ebe-default-rtdb.europe-west1.firebasedatabase.app/courses.json"



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
              firstDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              },
              secondDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              },
              thirdDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              }
            }
          },
          dancefitness:{
            statusBay: false,
            workoutStatus:{
              firstDay:{
                readyStatus: false,
              },
              secondDay:{
                readyStatus: false,
              },
              thirdDay:{
                readyStatus: false,
              },
              fourthDay:{
                readyStatus: false,
              },
              fifthDay:{
                readyStatus: false,
              }
            }
          },
          stepaerobics:{
            statusBay: false,
            workoutStatus:{
              firstDay:{
                readyStatus: false,
              },
              secondDay:{
                readyStatus: false,
              },
              thirdDay:{
                readyStatus: false,
              },
              fourthDay:{
                readyStatus: false,
              }
            }
          },
          stretching:{
            statusBay: false,
            workoutStatus:{
              firstDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0,0]
              },
              secondDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              },
              thirdDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              }
            }
          },
          yoga:{
            statusBay: false,
            workoutStatus:{
              firstDay:{
                readyStatus: false,
                exercisesCounter: [0]
              },
              secondDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0]
              },
              thirdDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0,0,0]
              },
              fourthDay:{
                readyStatus: false,
                exercisesCounter: [0,0,0,0]
              },
              fifthDay:{
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


  export const enter = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
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
    console.log("bay");
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
