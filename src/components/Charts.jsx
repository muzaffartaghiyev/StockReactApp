import { Grid, Box } from '@mui/material';
import { AreaChart } from '@tremor/react';
import { useSelector } from 'react-redux';


const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function Chart() {

    const {sales,purchases} = useSelector((state)=>state.stock)

    const salesData = sales.map((sale)=>(
        {
            date:new Date(sale.createdAt).toLocaleDateString("en-En",{
                day:"2-digit",
                month:"long"
            }),
            amount:sale.amount
        }))

    const purchasesData = purchases.map((purchase)=>(
        {
            date:new Date(purchase.createdAt).toLocaleDateString("en-En",{
                day:"2-digit",
                month:"long"
            }),
            amount:purchase.amount
        }))

  return (

    <Grid container mt={4} spacing={2}>

        <Grid item xs={12} md={6} >
            <Box className='p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 shadow-lg mt-6'>
                <Box className='bg-white rounded-xl p-4'>
                    <p className="font-medium text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">Total Sales (USD)</p>
                
                    <AreaChart
                        className="h-80"
                        index='date'
                        data={salesData}
                        categories={['amount']}
                        colors={['indigo']}
                        valueFormatter={dataFormatter}
                        yAxisWidth={60}
                        
                        />
                </Box>
            </Box>
            </Grid>
            <Grid item xs={12} md={6} >
                <Box className='p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 shadow-lg mt-6'>
                    <Box className='bg-white rounded-xl p-4 '>
                    <p className="font-medium text-tremor-title text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">Total Purchases (USD)</p>
                        <AreaChart
                            className="h-80"
                            index='date'
                            data={purchasesData}
                            categories={['amount']}
                            colors={['fuchsia']}
                            valueFormatter={dataFormatter}
                            yAxisWidth={60}
                            />
                    </Box>
                </Box>
            </Grid>
        
    </Grid>
    
  );
}