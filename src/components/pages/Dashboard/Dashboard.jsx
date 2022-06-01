import React,{useState,useEffect} from 'react'
import Navbar from '../NavBar/Navbar';
import Button from '../ReusableButton/Button';
import ReactPaginate from 'react-paginate';
import search from '../../../images/icon/search.svg';
import icon from '../../../images/Icon.svg'
import { sample } from '../DummyData/sample';
import SideNavBar from '../NavBar/SideNavBar';
import './Dashboard.css';
import { Link } from 'react-router-dom';
function Dashboard() {

  const [postPerPage] = useState(2);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

useEffect(() => {
  // Fetch items from another resources.
  const endOffset = itemOffset + postPerPage;
  setCurrentItems(sample.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(sample.length / postPerPage));
}, [itemOffset, postPerPage]);

// Invoke when user click to request another page.
const handlePageClick = (event) => {
  const endOffset = itemOffset + postPerPage;
  setCurrentItems(sample.slice(itemOffset, endOffset));
  const newOffset = (event.selected * postPerPage) % sample.length;
  setItemOffset(newOffset);
};

  return (
    <div className='dashboard'>
      <Navbar name="Dashboard"/>
      <div className='all_container'>
        <SideNavBar/>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-5 board'>
            <div className='shadow-xl grid_box'>
              <div className='each_board'>
                <img src={icon} alt="icon" className='pr-5'/>
                <p className='sm:pr-10 leading-6 opacity-50'>Total Number of Houses Added</p>
              </div>
              <p><b>24</b></p>
            </div>
            <div className='shadow-xl grid_box'>
              <div className='each_board'>
                <img src={icon} alt="icon" className='pr-5'/>
                <p className='sm:pr-10 leading-6 opacity-50'>Total Number of Opened Houses</p>
              </div>
              <p><b>22</b></p>
            </div>
            <div className='shadow-xl grid_box'>
              <div className='each_board'>
                <img src={icon} alt="icon" className='pr-5'/>
                <p className='sm:pr-10 leading-6 opacity-50'>Total Number of Closed Houses</p>
              </div>
              <p><b>02</b></p>
            </div>
          </div>
          <div className='houses_list'>
            <p className='text-center pr-3'>List of Houses added</p>
            <Link to='/dashboard/addHouses'>
              <Button name='Add New Houses'/>
            </Link>
          </div>
          <div className='shadow-2xl rounded p-5 mt-8 section'>
            <div className='uploadBoard'>
              <div className='searchBoard'>
                <input type="text" placeholder="Search"/>
                <span><img src={search} alt="search" /></span>
              </div>
                <select className='select'>
                  <option value="location">Select Location</option>
                </select>
                <select className='select' defaultValue="select state">
                  <option disabled value="select state">Select state</option>
                  <option value="oyo">Oyo</option>
                </select>
              <Button name="Filter"/>
            </div>
            <div className='responsive-table'>
              <table className='content-table'>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>House ID</th>
                    <th>Location</th>
                    <th>State</th>
                    <th>Amount <span>(per year)</span></th>
                    <th>Status</th>
                    <th>Reviews</th>
                    <th colSpan={3}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    currentItems && 
                    currentItems.map(({id,House_id,Location,State,Amount,Status,Reviews,Action})=>{
                      return(
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{House_id}</td>
                          <td>{Location}</td>
                          <td>{State}</td>
                          <td>{Amount}</td>
                          <td>{Status}</td>
                          <td>{Reviews}</td>
                          {
                            Action.map(action=>{
                              return (<td key={action}>{action}</td>)
                            })
                          }
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
          <div className='paginate'>
            <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName='page-num'
            pageClassName='list'
            previousClassName='prev_arrow'
            nextLinkClassName='arrows'
            nextClassName='next_arrow'
            previousLinkClassName='arrows'
            activeClassName='active'
            activeLinkClassName='active_link'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard