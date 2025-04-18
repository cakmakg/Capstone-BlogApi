"use strict"
const Blog = require('../models/blog');
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const blog = require('../models/blog');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["blogs"]
            #swagger.summary = "List blogs"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(blog);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(blog),
            data
        });
    },

    create: async (req, res) => {

        /*
            #swagger.tags = ["blogs"]
            #swagger.summary = "Create blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/blog"
                }
            }
        */

            const data = await blog.create(req.body);

            res.status(200).send({
                error: false,
                data
            });
    },

    read: async (req, res) => {

        /*
            #swagger.tags = ["blogs"]
            #swagger.summary = "Get Single blog"
        */

        const data = await blog.findById(req.params.id);

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {

        /*
            #swagger.tags = ["blogs"]
            #swagger.summary = "Update blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/blog"
                }
            }
        */

        const data = await blog.updateOne({ _id: req.params.id }, req.body, { runValidators: true });

        res.status(200).send({
            error: false,
            data,
            new: await blog.findById(req.params.id)
        });
    },

    deletee: async (req, res) => {
        /*
            #swagger.tags = ["blogs"]
            #swagger.summary = "Delete blog"
        */

        const data = await blog.deleteOne({ _id: req.params.id });

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            message: data.deletedCount ? 'Data deleted.' : 'Data is not found or already deleted.',
            data
        });
    },
};