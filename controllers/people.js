const Persons = require('../models/persons');

exports.getPeople = (req, res) => {
    if (Persons && Persons.length === 0)
        return res.sendStatus(204);
    return res.status(200).json(Persons);
}

exports.getPeopleById = (req, res) => {
    const id = req.params.id;
    if (id && !isNaN(id)) {
        const person = Persons.filter((person, index) => {
            console.log(person.id);
            return person.id === parseInt(id);
        });
        if (person)
            res.status(200).send(person[0]);
        else
            res.sendStatus(204);
    } else {
        return res.sendStatus(400);
    }
}