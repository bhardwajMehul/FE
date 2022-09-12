Starting with the idea of the quiz app.
I picked the idea of context, as I have to manage the state for a lot of different purposes and it will help me reduce the prop drilling.
So QuizContext is the context where the state management is done and all the API calling as well state setting functions are created here.
After this I have created kind of 2 pages-
1. SummaryPage- It will show you about the summary of the quiz, like how many times have you taken it and it gives you the option to take the other quiz whit and option to retake the quiz you have taken.
2. QuizHandler- It is the component which handles the quiz. It has 2 components in it, 
	1. QnA- which handles the question and answers.
	2. Result- which shows you the result upon completing the quiz, from which you can move to the summary page or retake the quiz.
By default the project will take you to the basic quiz and from there you can take the quiz and move to the summary page.
The idea behind making all of this fuss was to make the UX better as the user can move directly to the quiz and then status is displayed.
To save the user quiz count I have used the localStorage because even the tab is closed the progress is saved.

I didn't got the time to fix the edge cases, Apologies for that.
But it will get the work done.

Thanks & Regards
Mehul Bhardwaj