import React, {useState} from 'react';
import {Card, Loader, FormField} from '../Components';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Browse here
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {search && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for{' '}
                <span className="text-[#222328]">{search}</span>
              </h2>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
