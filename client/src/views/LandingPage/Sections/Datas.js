const price = [
  {
      "_id": 0,
      "name": "Any",
      "array": []
  },
  {
      "_id": 1,
      "name": "$0 to $199",
      "array": [0, 199]
  },
  {
      "_id": 2,
      "name": "$200 to $249",
      "array": [200, 249]
  },
  {
      "_id": 3,
      "name": "$250 to $279",
      "array": [250, 279]
  },
  {
      "_id": 4,
      "name": "$280 to $299",
      "array": [280, 299]
  },
  {
      "_id": 5,
      "name": "More than $300",
      "array": [300, 1500000]
  }
]



const condition = [
  {
      "_id": 1,
      "name": "Brand new"
  },
  {
      "_id": 2,
      "name": "New"
  },
  {
      "_id": 3,
      "name": "Used"
  },
  {
      "_id": 4,
      "name": "Good"
  },
  {
      "_id": 5,
      "name": "Old"
  }
]

const level = [
    {
        "_id": 1,
        "name": "Undergraduate"
    },
    {
        "_id": 2,
        "name": "Graduate"
    },
    {
        "_id": 3,
        "name": "PHD"
    }
  ]

  const department = [
    {
        "_id": 1,
        "name": "Engineering"
    },
    {
        "_id": 2,
        "name": "Arts"
    },
    {
        "_id": 3,
        "name": "Liberal Arts"
    },
    {
        "_id": 4,
        "name": "Accounting"
    },
    {
        "_id": 5,
        "name": "Bussiness"
    }
  ]

  const category = [
    {
        "_id": 1,
        "name": "Computer"
    },
    {
        "_id": 2,
        "name": "Physics"
    },
    {
        "_id": 3,
        "name": "Chemistry"
    },
    {
        "_id": 4,
        "name": "Arts"
    },
    {
        "_id": 5,
        "name": "Music"
    }
  ]


export {
  price,
  condition,
  level,
  department,
  category
}