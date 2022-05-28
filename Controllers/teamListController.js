const teams = require('../model/teamSchema')
const user = require('../model/userSchema')


const getTeamList = async (req, res) => {
    try {
        // const data = await teams.find(); 
        // return res.json(data)
        const start = parseInt(req.query.start);
        const length = parseInt(req.query.length);

        const pipeline = [
            {
                $lookup: {
                    from: 'users1',
                    localField: 'email',
                    foreignField: 'email',
                    as: 'user1'
                },
            },
            {
                $unwind: { path: '$user1' },
            },
            {
                $project: { 
                    team_name: '$user1.team_name',
                    full_name: 1,
                    email: 1,
                    number: 1,
                    city: 1,
                    url: 1,
                    _id: 0
                }
            },
        ];
        const data = await teams.aggregate(pipeline).skip(start).limit(length);
        return res.json(data);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error while getting data",
            error

        })
    }
}



module.exports = { getTeamList }