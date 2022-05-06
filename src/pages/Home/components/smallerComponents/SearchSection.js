import React from 'react'
import { Dropdown } from 'react-bootstrap'
import Button from './Button'
import './SearchSection.css'
const SearchSection = () => {
  return (
    <div className='searchsection'>
        <Dropdown>
            <Dropdown.Toggle 
            className='dropdowntoggle'
            id="dropdown-basic">
                Choose Area
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>


        <Dropdown>
            <Dropdown.Toggle  className='dropdowntoggle' id="dropdown-basic">
                Open House
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
            <Dropdown.Toggle  className='dropdowntoggle' id="dropdown-basic">
               Property Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Button text='find now'/>
    </div>
  )
}

export default SearchSection