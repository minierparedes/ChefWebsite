import React from 'react';
import "../../App.css";
import AdminRecipeList from '../Admin/AdminRecipeList';
import Dashboard from '../Admin/Dashboard';

export default function Services() {
    return (
        <div className="form-container">
        <Dashboard />
        <AdminRecipeList />
        </div>
    )
}