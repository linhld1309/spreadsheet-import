import { useState } from "react";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import firebase_app from '@/firebaseConfig';
import _ from "lodash";

const firestore = getFirestore(firebase_app);

interface UseSaveDataReturn {
  saveData: (data: Record<string, any>) => Promise<void>;
  loading: boolean;
  error: Error | null;
  success: boolean;
}

const useSaveData = (collectionName: string): UseSaveDataReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const saveData = async (data: Record<string, any>): Promise<void> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // await addDoc(collection(firestore, collectionName), data)  // ==> addDoc with random ID
      await setDoc(doc(firestore, collectionName, data.__index), _.omitBy(data, ["__index"]))
      setSuccess(true);
    } catch (err) {
      setError(err as Error);
      console.log("error===========>", err)
    } finally {
      setLoading(false);
    }
  };

  return { saveData, loading, error, success };
};

export default useSaveData;
