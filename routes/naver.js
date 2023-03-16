const axios = require('axios');
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/getNaverMovie', async function(req, res, next) {
  let query = req.query.query;
  
  let reqOptions = {
    headers: {
      'X-Naver-Client-Id' : 'B0XQlStLNYwlRFFkHkoU',
      'X-Naver-Client-Secret': 'ysmjddMIxF'
    },
    params: {
      query: query
    }
  };
  
  try {
    console.log('start')
    // 카카오톡 서버로 요청
    let movieRes = await axios.get(
      'https://openapi.naver.com/v1/search/movie.json',
      reqOptions
    );
    console.log(movieRes)
    return res.json(movieRes.data);
  } catch (e) {
    return res.json({
      status: 400,
      message: e
    });
  }
  /* res.render('index', { title: 'Express' }); */
});

module.exports = router;
