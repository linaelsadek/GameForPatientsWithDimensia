# GameForPatientsWithDimensia
This application is a high-fidelity interactive prototype for a web app to help patients with dementia to remember the faces, names, and relationships of their family members

The purpose of it is to practice divergent thinking when implementing an application.
=================================
Design Process
=================================
Design #1: flashcards
-	Outline of behaviour:
o	Display a set of family images
o	On mouse click/ on mouse hover reveal name, relationship, age...etc. of the person in the picture in relation to the user.
-	Reason behind design:
o	Since most people enjoy looking at photo albums and pictures taken from outings and gatherings, this design would resemble a photo album. The user will not feel the pressure that they are doing an assessment. Therefore, this approach not only will it help their memory, but it will potentially improve their mood. This will result in a high user satisfaction. Also, the UI does not have bells and whistles, so it is easy to learn and use (learnability). However, I do not think its effectiveness is good enough in helping patients with dementia.
Design #2: trivia with images
-	Outline of behaviour:
o	Display questions, and images to choose from as the answer.
o	If the user gets a correct answer, display the next question.
o	If the user gets a wrong answer, remain in the current question, and display a hint.
-	Reason behind design:
o	Trivia questions keep the user engaged. It is a good method to train the memory because the user is expected to recall information before the time runs out. In this design, because it is important for the user to memorize the correct information, when the user gets a question wrong it keeps getting repeated until the user selects the correct answer.
o	This design is effective in achieving the goal of helping patients with dementia based on research done. However, I do not think the timer aspect is good. It puts unnecessary pressure on the user, and I suspect it might affect the user satisfaction. 
Design #3: puzzle
- Outline of Behaviour:
o	Display a shuffled image
o	Ask the user to complete the puzzle by rearranging the tiles.
o	On puzzle completion, display a modal of who this person is.
o	Under image, display a list of images to complete the puzzle of. On click of image, display new puzzle. 
- Reason behind design:
o	Puzzles help the user focus on details of each puzzle piece in order to assemble the final image. This stimulates the cognitive skills of the user.
o	Patients with dementia will use this web application to play puzzles. The expectation is that they are playing a game so there is no pressure on them to complete it under a set of time. This helps with enhancing their mood (user satisfaction). In addition to that, it is intuitive, so there is no need for anyone to show them how to use it (learnability). Finally, based on studies, puzzles have been known to slow the progress of dementia (effectiveness).

# Final Design

Final Design: trivia with puzzle
-	Outline of behaviour:
o	Display a question and shuffle an image.
o	The user is expected to look for details in the shuffled image and select the correct image from multiple options provided.
o	If the user selects the correct answer, additional details will be shown on who the image belong to and the next question will be displayed.
o	If the user selects the wrong answer, the application will inform the user of the details of whom they selected and will be prompted to select again.
-	Reason behind design:
o	This design is a mesh between trivia and puzzle games. Puzzle games usually require patience and time, and trivia can put a lot of pressure on the user. This design uses the concept of a puzzle by taking an image and shuffling it. It also uses the concept of trivia by asking a question and providing selection. The puzzle aspect of it will help the user focus on details to try to identify a person using the smaller details provided. This improves the cognitive skills of the user. On the other hand, the trivia will help keep the user engaged, and assert their selection by giving them additional information on the current person in the image. 
o	This design removes the timer to enhance user satisfaction and make the user focus on the details of the puzzle to get the answer right so, in a way, it helps achieve the goal (effectiveness). Lastly, there is not many components in the UI, it is very easy to learn with no help. 

# How to run code

Download the application files and run index.html from your preferred browser
