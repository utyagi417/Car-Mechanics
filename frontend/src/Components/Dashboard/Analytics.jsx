
import { Fragment } from 'react';
import Card from '../../utils/Card';

import { AreaChart,DonutChart,Sparkline } from '@mantine/charts';

import { BsFillArrowUpRightCircleFill,BsFillArrowDownRightCircleFill } from "react-icons/bs";

const Analytics = () => {

    const cardData = [
        {
            image: 'https://modernize-angular-main.netlify.app/assets/images/svgs/icon-user-male.svg',
            color: '#ecf2ff',
            text:'Mechanics',
            number:'100' 
           
        },
        {
            image: 'https://modernize-angular-main.netlify.app/assets/images/svgs/icon-briefcase.svg',
            color:'#fef5e5',
            text:'Clients',
            number:'35,000'
        },
        {
            image: 'https://modernize-angular-main.netlify.app/assets/images/svgs/icon-mailbox.svg',
            color:'#e8f7ff ',
            text:'Projects',
            number:'652'
        },
        {
            image: 'https://modernize-angular-main.netlify.app/assets/images/svgs/icon-speech-bubble.svg',
            color:'#fdede8',
            text:'Payroll',
            number:'$65K'
        },
        {
            image: 'https://modernize-angular-main.netlify.app/assets/images/svgs/icon-favorites.svg',
            color:'#e6fffa',
            text:'Feedbacks',
            number:'1026'
        },
        {
            image: 'https://modernize-angular-main.netlify.app/assets/images/svgs/icon-connect.svg',
            color:'#e8f7ff',
            text:'Reports',
            number:'41'
        },
    ]


    const revenueData = [
        { Date: "12/03", Profit: 1231, Expense: 986 },
        { Date: "13/03", Profit: 1461, Expense: 714 },
        { Date: "14/03", Profit: 1197, Expense: 1087 },
        { Date: "15/03", Profit: 1354, Expense: 884 },
        { Date: "16/03", Profit: 1670, Expense: 1241 },
    ];

    const yearlyRevenueData = [
        { name: 'Current Year', value: 47481, color: 'indigo.6' },
        { name: 'Last Year', value: 43561, color: 'yellow.6' },
      ];

    const monthlyEarningData = [
        { Month: "Jan", Earning: 832},
        { Month: "Feb", Earning: 1461},
        { Month: "Mar", Earning: 867},
        { Month: "Apr", Earning: 1670},
        { Month: "May", Earning: 1520},
    ];


  return (
    <>
        <div className='mt-10'>
            <div className='flex justify-start items-center flex-wrap gap-5'>
                {cardData.map((card,i) => (
                    <Fragment key={i}>
                        <Card 
                            image={card.image}
                            color={card.color}
                            Text={card.text}
                            Number={card.number}                        
                        />
                    </Fragment>
                ))}
            </div>


            <div className='row chart-section-one'>
                <div className='chart-first col-md-8'>
                    <div>
                        <h3>Revenue Updates(in Dollar)</h3>
                        <h6>Overview of Profit</h6>
                    </div>
                    <div className='my-8'>
                        <AreaChart
                            h={300}
                            data={revenueData}
                            dataKey="Date"
                            series={[
                                { name: 'Profit', color: 'indigo.6' },
                                { name: 'Expense', color: 'teal.6' },
                            ]}
                            curveType="linear"
                            withLegend
                        />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='flex flex-col justify-between h-full'>
                        <div className='chart-second'>
                            <div>
                                <h3 className='text-xl'>Yearly Breakup</h3>
                                <h2 className='text-2xl my-5 font-bold font-Plus'>$36,358</h2>
                                <h6 className='flex items-center text-lg'>
                                    <span className='mx-2'>
                                        <BsFillArrowUpRightCircleFill size={35} color='lightgreen' />
                                    </span>
                                    +9% last year
                                </h6>
                            </div>
                            <DonutChart paddingAngle={30} data={yearlyRevenueData}/>
                        </div>
                        <div className='chart-third'>
                            <div className='px-5'>
                                <h3 className='text-xl'>Monthly Earnings</h3>
                                <h2 className='text-2xl my-5 font-bold font-Plus'>$3,358</h2>
                                <h6 className='flex items-center text-lg'>
                                    <span className='mx-2'>
                                        <BsFillArrowDownRightCircleFill size={35} color='#ed2939' />
                                    </span>
                                    -9% last month
                                </h6>
                            </div>
                            <AreaChart
                                h={150}
                                data={monthlyEarningData}
                                dataKey="Month"
                                series={[
                                    { name: 'Earning', color: 'indigo.6' },
                                ]}
                                curveType="natural"
                                tickLine="none"
                                gridAxis="none"
                                withXAxis={false}
                                withYAxis={false}
                                withDots={false}
                            />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    </>
  )
}

export default Analytics
