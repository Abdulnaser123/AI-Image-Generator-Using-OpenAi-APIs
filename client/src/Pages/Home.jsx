import React, {useState} from 'react';
import {Card, Loader, FormField} from '../Components';

const RenderCards = ({data, title}) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }
  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [allPost, setAllPost] = useState('');

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
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for{' '}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:gris-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title={'no searched data'} />
              ) : (
                <RenderCards data={[]} title="no data found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
