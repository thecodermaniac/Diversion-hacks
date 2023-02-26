import React from "react";

const Form = () => {
  return (
    <div>
      {/* Form Start */}
      {/* <aside className=" mx-0 md:mx-10 flex justify-center">
        <form
          className="  "
          onSubmit={handleFormSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <div className=" flex flex-col mb-5">
            <label htmlFor="fullName" className=" text-lg font-semibold">
              Enter your full name
            </label>
            <input
              type="text"
              required
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className=" px-5 py-3 text-black"
            />
          </div>

          <div className="nestedContainer   mb-5">
            <div>
              <label htmlFor="currentPosition">Current Position</label>
              <input
                type="text"
                required
                name="currentPosition"
                className="w-full  "
                value={currentPosition}
                onChange={(e) => setCurrentPosition(e.target.value)}
              />
            </div>
            <div className=" ml-10">
              <label htmlFor="currentLength">For how long? (year)</label>
              <input
                type="number"
                required
                name="currentLength"
                className="w-full  "
                value={currentLength}
                onChange={(e) => setCurrentLength(e.target.value)}
              />
            </div>
          </div>
          <div className="  flex flex-col mb-5">
            <label htmlFor="currentTechnologies">Technologies used</label>
            <input
              type="text"
              required
              name="currentTechnologies"
              className=" w-full "
              value={currentTechnologies}
              onChange={(e) => setCurrentTechnologies(e.target.value)}
            />
          </div>

          {companyInfo.map((company, index) => (
            <div
              className="justify-between w-full items-center flex "
              key={index}
            >
              <div className="companies">
                <label htmlFor="name">Company Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={(e) => handleUpdateCompany(e, index)}
                />
              </div>
              <div className="companies">
                <label htmlFor="position">Position Held</label>
                <input
                  type="text"
                  name="position"
                  required
                  onChange={(e) => handleUpdateCompany(e, index)}
                />
              </div>

              <div className=" flex flex-row items-center">
                {companyInfo.length < 3 && (
                  <button onClick={handleAddCompany}>
                    <IoIosAddCircle className=" text-4xl rounded-full bg-transparent text-teal-500" />
                  </button>
                )}
                {companyInfo.length > 1 && (
                  <button
                    onClick={() => handleRemoveCompany(index)}
                    className=" ml-10"
                  >
                    <AiFillMinusCircle className=" text-4xl rounded-full bg-transparent text-red-500" />
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className=" flex flex-col mt-5 w-full">
            <label htmlFor="photo">Upload your image</label>
            <input
              type="file"
              name="photo"
              required
              id="photo"
              accept="image/x-png,image/jpeg"
              onChange={(e) => setHeadshot(e.target.files[0])}
              className=" w-full border-none p-0 mt-3 "
            />
          </div>
          <div className=" flex items-center justify-center">
            {!loading && (
              <button className=" bg-teal-500 px-3 py-2 rounded-md hover:bg-teal-600 font-semibold">
                CREATE RESUME
              </button>
            )}
            {loading && <Loading />}
          </div>
        </form>
      </aside>
      Form End */}
    </div>
  );
};

export default Form;