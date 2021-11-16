import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";

interface Props {
  slug: string;
}
const CommentsForm = ({ slug }: Props) => {
  const [error, setError] = useState(false);
  // const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const nameEl = useRef<HTMLInputElement>();
  const emailEl = useRef<HTMLInputElement>();
  const commentEl = useRef<HTMLTextAreaElement>();
  const storeDataEl = useRef<HTMLInputElement>();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { value: content } = commentEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!name || !email || !content) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      content,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(commentObj).then(() => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Mesaj Yaz</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          name="comment"
          placeholder="Mesajınız"
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={nameEl}
          name="name"
          placeholder="İsim"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          type="text"
        />
        <input
          ref={emailEl}
          name="email"
          placeholder="Email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          type="text"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
            defaultChecked
          />
          <label
            htmlFor="storeData"
            className="text-gray-500 cursor-pointer ml-2"
          >
            Adımı ve emailimi bir sonraki gelişim için sakla.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">
          Tüm alanları doldurmak zorunludur.
        </p>
      )}
      <div className="mt-8">
        <button
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
          type="button"
          onClick={handleCommentSubmission}
        >
          Gönder
        </button>
        {showSuccessMessage && (
          <span className="text-lg float-right font-semibold mt-3 text-green-500">
            Mesajınızı incelemeye aldık.
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
