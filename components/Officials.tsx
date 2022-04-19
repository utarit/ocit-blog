import React from "react";

const YK = [ "İlayda Acar", "İzel Avkan", "Hale Betül Oğul" , "Yasemin Atintaş", "Yusuf Emir Güneş"]

const DK = ["Elif Doğan", "Nergis Yasav", "Sefa Aktaş"]

const Officials = () => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Resmi</h3>
      <h4 className="text-md mb-4 font-semibold">Yürütme Kurulu</h4>

      {YK.map((name) => <span key={name} className="block pb-3 ">
        {name}
      </span>)}

      <h4 className="text-md mt-6 mb-4 font-semibold">Denetleme Kurulu</h4>
      {DK.map((name) => <span key={name} className="block pb-3">
        {name}
      </span>)}
    </div>
  );
};

export default Officials;