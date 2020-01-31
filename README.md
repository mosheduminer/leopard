# leopard

A simple tool for presenting data analysis in an html file.

## Data format

The file containing the data should be of the following form:
```js
{
    "labels": ["label1", "label2"] # etc.
    "data": [
        ["row1-data-cell1", "row1-data-cell2"] # etc.
        ["row2-data-cell1", "row2-data-cell2"] # etc.
        # the rest of the rows
    ]
}
```

## Get started

Clone the repo, then run:

```bash
cd leopard
npm install
```

The build process in not yet in place, so for now, you'll need to do the following:

+ manually add your data file (`data.json`) to the `data` folder.
+ run `npm run dev` or `npm run build`.

Currently, `npm run build` produces several files, the planned build process will bundle them all into a single html file.

If you ran `npm run dev`, navigate to [localhost:5000](http://localhost:5000). You should see your data table. If you ran `npm run build`, open the `public/index.html` file in your browser.
