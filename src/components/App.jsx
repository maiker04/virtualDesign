import { useState } from 'react';
import CanvasFile from './CanvasFile';
import NavBar from './NavBar';
import Footer from './Footer';
import { IoMdCloudUpload } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import Community from './Community';

function App() {
  // Estado para controlar qué página se muestra
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      {/* Pasamos setCurrentPage al NavBar para que los botones funcionen */}
      <NavBar setPage={setCurrentPage} />

      {currentPage === 'home' ? (
        <>
          {/* SECCIÓN HERO / UPLOAD */}
          <div className="flex bg-radial-[at_70%_40%] from-[#85cf67] to-white to-80% px-[1.5rem]!">
            <div className="mt-[10rem]! mb-[5rem]! mx-auto! flex flex-col">
              <div className="mx-auto! max-w-[90%]">
                <h2 className="text-3xl md:text-5xl font-semibold text-center">
                  Edit text in image: Write text in your pictures
                </h2>
                <p className="text-md md:text-xl text-center mt-8! mx-1! md:mx-4! lg:mx-10!">
                  Effortlessly edit text in images online to add new meaning to pictures.
                  Virtual Design's photo text editor allows you to add words and edit
                  screenshot text. No advanced skills necessary.
                </p>
              </div>

              <div className="mt-8! mx-auto!">
                <form>
                  <div className="bg-white rounded-3xl w-auto! md:w-[44rem]! drop-shadow-md">
                    <div className="flex flex-col items-center p-[1.5rem]!">
                      <div className="flex flex-col items-center bg-white border-3 border-slate-300 hover:border-[#85cf67] border-dashed rounded-md w-full cursor-pointer">
                        <div className="flex bg-[#85cf67] text-white border-2 border-[#85cf67] rounded-2xl p-2! mt-7! mb-4!">
                          <IoMdCloudUpload className="self-center mr-2! text-xl" /> Upload image
                        </div>
                        <p className="text-slate-500 text-sm! md:text-lg! font-semibold mb-4!">
                          Or drag and drop a file here
                        </p>
                      </div>
                      <p className="text-slate-500 text-xs md:text-sm my-2!">
                        By uploading a file you agree to our <a href="#" className="text-[#85cf67] underline">Terms of Use</a>.
                      </p>
                    </div>
                  </div>
                  <input
                    type="file"
                    id="input_image"
                    accept="image/jpeg,image/png,image/webp,image/heic,image/svg+xml"
                    className="hidden!"
                  />
                </form>
              </div>
            </div>
          </div>

          {/* SECCIÓN HOW TO / PASOS */}
          <div className="flex flex-col mt-20! px-[1.5rem]!">
            <h4 className="text-4xl font-semibold text-center">
              How to add text to a photo
            </h4>
            <div className="mt-15! mb-15! flex flex-wrap gap-5">
              {/* Paso 1 */}
              <div className="bg-slate-100 flex-1 rounded-3xl p-7! flex flex-col items-start justify-center">
                <div className="p-4! bg-blue-200 rounded-2xl self-center">
                  <FaCloudUploadAlt className="text-4xl" />
                </div>
                <p className="text-slate-700 text-lg self-center font-semibold mt-2!">
                  Upload your image
                </p>
                <p className="text-slate-600 text-sm text-left font-medium my-2!">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
                  amet mattis urna. Sed mi est, scelerisque sit amet velit a, mollis
                  interdum magna.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="bg-slate-100 flex-1 rounded-3xl p-7! flex flex-col items-start justify-center">
                <div className="p-4! bg-blue-200 rounded-2xl self-center">
                  <FaPencil className="text-4xl" />
                </div>
                <p className="text-slate-700 text-lg self-center font-semibold my-2!">
                  Add text to photo
                </p>
                <p className="text-slate-600 text-sm text-left font-medium my-2!">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
                  amet mattis urna. Sed mi est, scelerisque sit amet velit a, mollis
                  interdum magna.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="bg-slate-100 flex-1 rounded-3xl p-7! flex flex-col items-start justify-center">
                <div className="p-4! bg-blue-200 rounded-2xl self-center">
                  <FaDownload className="text-4xl" />
                </div>
                <p className="text-slate-700 text-lg self-center font-semibold my-2!">
                  Download your design
                </p>
                <p className="text-slate-600 text-sm text-left font-medium my-2!">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
                  amet mattis urna. Sed mi est, scelerisque sit amet velit a, mollis
                  interdum magna.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Muestra el componente Community si no estamos en home */
        <Community />
      )}

      <Footer />
    </>
  );
}

export default App;