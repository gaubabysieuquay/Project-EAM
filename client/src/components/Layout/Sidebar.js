import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Sidebar extends Component {
	render() {
		return (
			<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
				 {/* Sidebar - Brand */}
		        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
		          <div className="sidebar-brand-icon rotate-n-15">
		            <i className="fas fa-laugh-wink" />
		          </div>
		          <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
		        </a>
		         {/* Divider */}
		        <hr className="sidebar-divider my-0" />
		        {/* Nav Item - Dashboard */}
		        <li className="nav-item active">
		          <Link to={"/"} className="nav-link">
		            <i className="fas fa-fw fa-tachometer-alt" />
		            <span>Dashboard</span></Link>
		        </li>
		        {/* Divider */}
		        <hr className="sidebar-divider" />
		        {/* Heading */}
		        <div className="sidebar-heading">
		          Quản lý
		        </div>
		        {/* Nav Item - Asset Collapse Menu */}
		        <li className="nav-item">
		          <Link to='' className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
		            <i className="fas fa-fw fa-cog" />
		            <span>Tài sản</span>
		          </Link>
		          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
		            <div className="bg-white py-2 collapse-inner rounded">
		              <h6 className="collapse-header">Tài sản</h6>
		              <Link to="/display" className="collapse-item">Danh sách tài sản</Link>
		              <Link to="/display_stock" className="collapse-item">Quản lý Stock</Link>
		              <Link to="" className="collapse-item">Quản lý lịch sử tài sản</Link>
		            </div>
		          </div>
		         </li>
		        <li className="nav-item">
			        <Link to='' className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
			          <i className="fas fa-fw fa-wrench" />
			          <span>Thành viên</span>
			        </Link>
			        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
			          <div className="bg-white py-2 collapse-inner rounded">
			            <h6 className="collapse-header">Thành viên</h6>
			            <a className="collapse-item">Quản lý thành viên</a>
			          </div>
			        </div>
			      </li>
			</ul>
		);
	}
}
