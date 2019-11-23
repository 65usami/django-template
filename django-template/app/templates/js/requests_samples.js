const async_get = (url, json_params = "") => {
  return new Promise(function(resolve, reject) {
    $.ajax({
      type: "get",
      url: url,
      timeout: 30000,
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(json_params)
    })
      .done(function(data, textStatus, jqXHR) {
        resolve(data, textStatus, jqXHR);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        reject(jqXHR, textStatus, errorThrown);
      });
  });
};

// Reference:
// https://docs.djangoproject.com/en/2.2/ref/csrf/#is-posting-an-arbitrary-csrf-token-pair-cookie-and-post-data-a-vulnerability

// For CSRF
const csrfSafeMethod_ = method => {
  return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method);
};

// For CSRF
const getCookie_ = () => {
  const name = "csrftoken";
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

const async_post = (url, json_params = "") => {
  const csrftoken = getCookie_();
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      if (!csrfSafeMethod_(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    }
  });

  return new Promise(function(resolve, reject) {
    $.ajax({
      type: "post",
      url: url,
      timeout: 30000,
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      processData: false,
      data: JSON.stringify(json_params)
    })
      .done(function(data, textStatus, jqXHR) {
        resolve(data, textStatus, jqXHR);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        reject(jqXHR, textStatus, errorThrown);
      });
  });
};

const async_post_file = (url, upload_data) => {
  const csrftoken = getCookie_();
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      if (!csrfSafeMethod_(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    }
  });

  return new Promise(function(resolve, reject) {
    $.ajax({
      type: "post",
      url: url,
      timeout: 120000,
      cache: false,
      processData: false,
      contentType: false,
      data: upload_data
    })
      .done(function(data, textStatus, jqXHR) {
        resolve(data, textStatus, jqXHR);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        reject(jqXHR, textStatus, errorThrown);
      });
  });
};


//// Examples

// const json_params = {
//     "name":"山田 太郎",
//     "age":36
// };

// async_get(url, json_params)
// .then((data, textStatus, jqXHR) => {
//         console.log("@success");
//         console.log("@resolve");
//         console.log(data);
//     }, (jqXHR, textStatus, errorThrown) => {
//         console.log("@success");
//         console.log("@reject");
//         console.error(jqXHR);
// })
// .catch((error) => {
//     console.log("@error");
//     console.log(error);
// })
// .finally(() => {
//     console.log("@finally");
// });

// var url = 'https://api.github.com/search/repositories?q=javascript';

// const json_params = {
//     "name":"山田 太郎",
//     "age":36
// };

// async_post(url, json_params)
// .then((data, textStatus, jqXHR) => {
//         console.log("@success");
//         console.log("@resolve");
//         console.log(data);
//     }, (jqXHR, textStatus, errorThrown) => {
//         console.log("@success");
//         console.log("@reject");
//         console.error(jqXHR);
// })
// .catch((error) => {
//     console.log("@error");
//     console.log(error);
// })
// .finally(() => {
//     console.log("@finally");
// });

//// Examples: upload file

// // HTML
// <form action="/upload/" method="post" id="file-upload-form" enctype="multipart/form-data"> {% csrf_token %}
//     {{ form }}
//     <button type="submit" class="btn btn-primary" id='upload-btn'>Upload</button>
// </form>

// // JS
// event.preventDefault();
// const upload_data = new FormData($('form').get(0));

// async_post_file(url, upload_data)
// .then((data, textStatus, jqXHR) => {
//         console.log("@success");
//         console.log("@resolve");
//         console.log(data);
//     }, (jqXHR, textStatus, errorThrown) => {
//         console.log("@success");
//         console.log("@reject");
//         console.error(jqXHR);
// })
// .catch((error) => {
//     console.log("@error");
//     console.log(error);
// })
// .finally(() => {
//     console.log("@finally");
// });