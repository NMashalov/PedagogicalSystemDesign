import fastapi


app = fastapi.FastAPI()


@app.get()
def upload_image():
    return



from PIL import Image
import redis
from io import BytesIO


output = BytesIO()
im = Image.open("/home/user/im.jpg")
im.save(output, format=im.format)

r = redis.StrictRedis(host='localhost', port= 6379, db =0)
r.set('imgdata', output.getvalue())
output.close()
r.save