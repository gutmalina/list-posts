import { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import Stack from "react-bootstrap/Stack";

const Paging = ({ allPage, setActivePage, activePage }) => {
  const selectPage = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(()=>{
    if(activePage > allPage.length){
      setActivePage(1)
    }
  }, [allPage, activePage])

  return (
    <>
      <Pagination className="p-3 mb-4">
        {allPage &&
          allPage.map((number) => (
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => selectPage(number)}
            >
              {number}
            </Pagination.Item>
          ))}
      </Pagination>
    </>
  );
};

export default Paging;
