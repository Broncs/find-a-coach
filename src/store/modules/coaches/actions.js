export default{

    registerCoach(context, data){

        console.log(context.rootGetters.userId)
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }

        context.commit('registerCoach', coachData)
    }
};