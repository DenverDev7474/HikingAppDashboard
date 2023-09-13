import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import useStore from "../../store/store"
import { useEffect } from "react"


const ActiveHikersCounter = () => {

    return (
        <Card>
            <CardHeader title="Active Hikers" />
            <CardContent>
                <Typography variant="h4">Today's Active Hike Are:{count}</Typography>
            </CardContent>
        </Card>
    )
}



export default ActiveHikersCounter 