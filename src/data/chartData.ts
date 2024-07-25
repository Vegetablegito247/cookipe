interface Chart {
    labels: string[],
    datasets: any[]
}

export const recipeChartData: Chart = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            label: "Steps by Ajadi",
            data: [3000, 4000, 2000, 6000, 3008, 8300],
            borderColor: "green",
            borderWidth: 1,
            pointStyle: false,
            tension: .5,
        },
    ]
}

export const blogChartData: Chart = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            label: "Steps by Ajadi",
            data: [8300, 6000, 7000, 5000, 6000, 4500, 5000],
            borderColor: "red",
            borderWidth: 1,
            pointStyle: false,
            tension: .5,
        },
    ]
}

export const reelChartData: Chart = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            label: "Steps by Ajadi",
            data: [3000, 4000, 2000, 6000, 3008, 8300],
            borderColor: "green",
            borderWidth: 1,
            pointStyle: false,
            tension: .5,
        },
    ]
}

export const statisticsChartData: Chart = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    datasets: [
        {
            label: "Total interactions",
            data: [3000, 4000, 2000, 6000, 3008, 8300, 1200, 3400, 5000, 3400, 10000, 2300, 3000],
            borderColor: "#5BBE97",
            backgroundColor: '#5BBE97',
            borderWidth: 0,
            borderRadius: 5
        },
    ]
}

export const reactionChartData: Chart = {
    labels: [
        "Recipes",
        "Blogs",
        "Reels"
    ],
    datasets: [
        {
            label: "Total interactions",
            data: [50, 30, 20],
            borderColor: "#5BBE97",
            backgroundColor: ['rgba(163, 95, 234, 1)', 'rgba(83, 187, 129, 1)', 'rgba(45, 69, 255, 1)'],
            borderWidth: 0,
            rotation: 180,
            weight: 200
        },
    ]
}