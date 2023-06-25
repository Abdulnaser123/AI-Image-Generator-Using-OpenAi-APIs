import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormField, Loader} from '../Components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    console.log(randomPrompt);
    setForm({...form, prompt: randomPrompt});
  };

  const [generatingImage, setGeneratingImage] = useState(false);
  const [generateImage, setGenerateImage] = useState();

  const [loading, setLoading] = useState(false);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create Your Image
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create Image as you want
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Abdelnasser"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Abdelnasser"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div
            className="relative bg-gray-50 border border-gray-300
           text-gray-900 rounded-lg focus:ring-blue-500
           focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center"
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImage && (
              <div
                className="absolute inset-0 z-0 flex justify-center 
              items-center bg-[rgba(0,0,0,0.5)] rounded-lg"
              >
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full   px-5 py-2.5 mt-2"
            onClick={generateImage}
          >
            {generatingImage ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className="mt-10">
          <p className="text-[#666e75] text-[14px]">
            Once you have created the image you want, you can share it with
            community
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full px-5 py-2.5 "
          >
            {loading ? 'Sharing' : 'Share with community'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
