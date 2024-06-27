import React from 'react'

const DashboardBreadcrumbs = ({title = "Title",breadcrumbList=['Dashboard','Second','Third'] }) => {
  return (
    <>
        <div className='dashboard-breadcrumbs'>
            <h1 className='title'>{title}</h1>
            <ul>
              {breadcrumbList.map((breadcrumb,i) =>(
                <li key={i}>{breadcrumb}</li>
              ))}
            </ul>
        </div>
    </>
  )
}

export default DashboardBreadcrumbs
