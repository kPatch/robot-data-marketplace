# usar-ocs
Urban Search and Rescure (USAR) Operator Control Station (OCS)
Forked from portal.one repo

# Run

## Test Video
```
# Run test web server
npm run dev

# Lanch Gazebo Turtlebot World
roslaunch turtlebot_gazebo turtlebot_world.launch

# Launch web video server
rosrun web_video_server web_video_server
```

## Test Maps
```
roscore
rosrun map_server m_server willow_test_map.pgm 0.05
roslaunch rosbridge_server rosbridge_websocket.launch

npm run dev
```
