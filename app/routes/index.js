module.exports = (router, productsLoader) => {

    /* Start of Categories */
    /**/
    /* router.get('/merchandise', async ctx => {
         const products = await productsLoader.merchandise();
         ctx.state.model = {
             title: 'merchandise',
         }
         await ctx.render('/products/merchandise', { products: products });
     })*/
    /* End of Categories */

    /* Other Pages */
    router.get('/', async ctx => {
        ctx.state.model = {
            title: 'Home',
        }
        await ctx.render('home');
    })

    router.get('/about', async ctx => {
        ctx.state.model = {
            title: 'About',
        }
        await ctx.render('about');
    })

    router.get('/delegate', async ctx => {
        ctx.state.model = {
            title: 'Delegate',
        }
        await ctx.render('delegate');
    })

    router.get('/contributions', async ctx => {
        ctx.state.model = {
            title: 'Contributions',
        }
        await ctx.render('contributions');
    })

    router.get('/downloads', async ctx => {
        ctx.state.model = {
            title: 'Downloads',
        }
        await ctx.render('downloads');
    })


}