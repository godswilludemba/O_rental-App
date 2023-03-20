import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

export default function Contact({ userRef, listing }) {
  const [landlord, setLandlord] = useState(null);
  const [massage, setMassage] = useState("");

  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get Landlord's data");
      }
    }
    getLandlord();
  }, [userRef]);

  function onChange(e) {
    setMassage(e.target.value);
  }

  return (
    <>
      {landlord !== null && (
        <div>
          <p>
            Contact{landlord.email} for the {listing.name.toLowerCase()}
          </p>
          <div>
            <textarea
              name="massage"
              id="message"
              rows="2"
              value={massage}
              onChange={onChange}
            ></textarea>
          </div>
          a
        </div>
      )}
    </>
  );
}
