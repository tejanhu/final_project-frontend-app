import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Scanner;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({ "definitions" })

@Component
public class Dictionary {

	@JsonProperty("definitions")
	private HashMap<String, String> definitions;

	private Scanner reader;

	public Dictionary() {

		definitions = new HashMap<String, String>();
		openFile();
		readFile();
		reader.close();

	}

	@JsonProperty("definitions")
	public HashMap<String, String> getAllDefinitions() {
		return definitions;
	}

	@JsonProperty("definitions")
	public String getDefinition(String key) {
		return definitions.get(key);
	}

	@Override
	public String toString() {
		return super.toString();
	}

	private void openFile() {

		try {
			reader = new Scanner(new File("dictionary.txt"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

	}

	private HashMap<String, String> readFile() {

		String key = "";
		String value = "";

		while (reader.hasNext()) {
			key = reader.next();
			value = reader.nextLine();
			definitions.put(key, value);
		}
		return definitions;

	}

}